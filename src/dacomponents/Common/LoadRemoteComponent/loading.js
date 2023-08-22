import styles from './loading.less';

const Loading = ({ color }) => {
  return (
    <div className={styles.loader} style={{ '--color': color }}>
      加载中...
    </div>
  );
};

export default Loading;
