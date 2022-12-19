<script lang="ts" setup>
import {
  h,
  toRefs,
  getCurrentInstance
} from 'vue';

type Props = {
  network: string;
  url: string;
  title: string;
  description?: string;
  quote?: string;
  hashtags?: string;
  twitterUser?: string;
  media?: string;
  tag: string;
  popup: {
    width: number;
    height: number;
  };
};

type Emits = {
  (e: 'change'): void;
  (e: 'close'): void;
  (e: 'open'): void;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
  description: '',
  quote: '',
  hashtags: '',
  twitterUser: '',
  media: '',
  tag: 'a',
  popup: () => ({
    width: 626,
    height: 436,
  }),
});

const slots = useSlots();

const $window = typeof window !== 'undefined' ? window : null;

// Popup variables
const popupTop = ref(0);
const popupLeft = ref(0);
const popupWindow = ref(undefined);
const popupInterval = ref(null);

const {
  network,
  url,
  title,
  description,
  quote,
  hashtags,
  twitterUser,
  media,
  tag,
  popup
} = toRefs(props);

/**
 * We use shorter names to reduce the final bundle size
 *
 * Properties:
 * @u = url
 * @t = title
 * @d = description
 * @q = quote
 * @h = hashtags
 * @m = media
 * @tu = twitterUser
 */

const availableNetworks = {
  baidu: 'http://cang.baidu.com/do/add?iu=@u&it=@t',
  buffer: 'https://bufferapp.com/add?text=@t&url=@u',
  email: 'mailto:?subject=@t&body=@u%0D%0A@d',
  evernote: 'https://www.evernote.com/clip.action?url=@u&title=@t',
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h',
  flipboard: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t',
  hackernews: 'https://news.ycombinator.com/submitlink?u=@u&t=@t',
  instapaper: 'http://www.instapaper.com/edit?url=@u&title=@t&description=@d',
  line: 'http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d',
  linkedin: 'https://www.linkedin.com/shareArticle?url=@u',
  messenger: 'fb-messenger://share/?link=@u',
  odnoklassniki: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t',
  pinterest: 'https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t',
  pocket: 'https://getpocket.com/save?url=@u&title=@t',
  quora: 'https://www.quora.com/share?url=@u&title=@t',
  reddit: 'https://www.reddit.com/submit?url=@u&title=@t',
  skype: 'https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d',
  sms: 'sms:?body=@t%0D%0A@u%0D%0A@d',
  stumbleupon: 'https://www.stumbleupon.com/submit?url=@u&title=@t',
  telegram: 'https://t.me/share/url?url=@u&text=@t%0D%0A@d',
  tumblr: 'https://www.tumblr.com/share/link?url=@u&name=@t&description=@d',
  twitter: 'https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu',
  viber: 'viber://forward?text=@t%0D%0A@u%0D%0A@d',
  vk: 'https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true',
  weibo: 'http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m',
  whatsapp: 'https://api.whatsapp.com/send?text=@t%0D%0A@u%0D%0A@d',
  wordpress: 'https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m',
  xing: 'https://www.xing.com/social/share/spi?op=share&url=@u&title=@t',
  yammer: 'https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d'
};

const networks = computed(() => {
  return availableNetworks;
});

const key = computed(() => {
  return network.value.toLowerCase();
});

const rawLink = computed(() => {
  const ua = navigator.userAgent.toLowerCase();
  if (
    key.value === 'sms' &&
    (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1)
  ) {
    return networks.value[key.value].replace(':?', ':&');
  }
  return networks.value[key.value] as string;
});

const shareLink = computed(() => {
  // console.log('check sharelink');
  let link = rawLink.value;

  if (key.value === 'twitter') {
    if (!hashtags.value.length) link = link.replace('&hashtags=@h', '');
    if (!twitterUser.value.length) link = link.replace('@tu', '');
  }

  return link
    .replace(/@tu/g, '&via=' + encodeURIComponent(twitterUser.value))
    .replace(/@u/g, encodeURIComponent(url.value))
    .replace(/@t/g, encodeURIComponent(title.value))
    .replace(/@d/g, encodeURIComponent(description.value))
    .replace(/@q/g, encodeURIComponent(quote.value))
    .replace(/@h/g, encodedHashtags.value)
    .replace(/@m/g, encodeURIComponent(media.value));
});

const encodedHashtags = computed(() => {
  // console.log('check encodedHashtags');
  if (key.value === 'facebook' && hashtags.value.length) {
    return '%23' + hashtags.value.split(',')[0];
  }

  return hashtags.value;
});

const resizePopup = () => {
  // console.log('resize popup method triggered here ');

  const width =
    $window?.innerWidth ||
    document.documentElement.clientWidth ||
    $window?.screenX;
  const height =
    $window?.innerHeight ||
    document.documentElement.clientHeight ||
    $window?.screenY;
  const systemZoom = width / $window?.screen.availWidth;

  popupLeft.value =
    (width - popup.value.width) / 2 / systemZoom +
    ($window?.screenLeft !== undefined
      ? $window?.screenLeft
      : $window?.screenX);
  popupTop.value =
    (height - popup.value.height) / 2 / systemZoom +
    ($window?.screenTop !== undefined ? $window?.screenTop : $window?.screenY);
};

const share = () => {
  // debugger;
  resizePopup();

  // If a popup window already exist, we close it and trigger a change event.
  if (popupWindow.value) {
    clearInterval(popupInterval.value);

    // Force close (for Facebook)
    popupWindow.value.close();
    emit('change');
  }

  popupWindow.value = $window!.open(
    shareLink.value,
    'sharer-' + key.value,
    ',height=' +
    popup.value.height +
    ',width=' +
    popup.value.width +
    ',left=' +
    popupLeft.value +
    ',top=' +
    popupTop.value +
    ',screenX=' +
    popupLeft.value +
    ',screenY=' +
    popupTop.value
  );

  // If popup are prevented (AdBlocker, Mobile App context..), popup.window stays undefined and we can't display it
  if (!popupWindow.value) return;

  popupWindow.value.focus();

  // Create an interval to detect popup closing event
  popupInterval.value = setInterval(() => {
    if (!popupWindow.value || popupWindow.value.closed) {
      clearInterval(popupInterval.value);

      popupWindow.value = null;

      emit('close');
    }
  }, 500);

  emit('open');
};

const touch = () => {
  // console.log('touch method triggered');
  window.open(shareLink.value, '_blank');
  emit('open');
};

const renderData = () => {
  if (!networks.value.hasOwnProperty(key.value)) {
    throw new Error('Network ' + key.value + ' does not exist');
  }

  const node = {
    class: 'share-network-' + key.value,
    on: {
      click: rawLink.value.substring(0, 4) === 'http' ? share : touch
    },
    attrs: {
      href:
        rawLink.value.substring(0, 4) === 'http'
          ? shareLink.value
          : rawLink.value
    }
  };

  if (tag.value === 'a') {
    node.attrs = { href: 'javascript:void(0)' };
  }

  return [tag.value, node, slots!.default()];
};

const data = renderData();
const tg = `${data[0]}`;
const node = data[1];
const content = data[2];


const render = h(
  tg,
  {
    onClick: node.on.click,
    href: node.attrs.href
  },
  content
);
</script>

<template>
  <render />
</template>