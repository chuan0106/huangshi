import logoImage from '@/assets/common/logo/docloud.png';
import img404 from '@/assets/common/404/404.png';
import img500 from '@/assets/common/404/500.png';
const config = {
  403: {
    img: logoImage,
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: img404,
    title: '404',
    desc: '很不幸，您探索了一个未知领域！',
  },
  500: {
    img: img500,
    title: '500',
    desc: '非常抱歉，服务器遇到错误，请您稍后再试！',
  },
};

export default config;
