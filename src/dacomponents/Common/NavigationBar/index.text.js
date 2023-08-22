import N from './index';

export default function IndexText() {
  return (
    <div style={{ padding: 10 }}>
      <h1>第一种导航</h1>
      <N
        bgColor="#eee"
        bgImg="/logo/logo.png"
        mode="horizontal"
        data={[
          { content: '导航单单' },
          { content: '导航单单' },
          { content: '导航单单单' },
          { content: '导航单' },
        ]}
        itemHeight={40}
        selected={{
          bgColor: ['red', 'blue'],
          skew: 30,
          leftLine: { width: 4, height: 40, color: '#00bcd4', left: 2 },
          borderLeft: { width: 2, color: '#00bcd4', style: 'solid' },
        }}
        itemHover={{
          bgColor: ['red', 'blue'],
          skew: 30,
          leftLine: { width: 4, height: 40, color: '#00bcd4', left: 2 },
          borderLeft: { width: 2, color: '#00bcd4', style: 'solid' },
        }}
        fontSize={18}
        color="red"
        fontWeight={600}
        height={70}
        width={800}
        itemMargin={{
          marginTop: 0,
          marginBottom: 0,
          marginRight: 20,
          marginLeft: 20,
        }}
        onChange={(data, key) => {
          console.log(data, key, 'data, key');
        }}
      />
      <br />
      <h1>第二种导航</h1>
      <N
        bgColor="#eee"
        mode="horizontal"
        data={[
          { content: '导航第一' },
          { content: '导航' },
          { content: '导航' },
          { content: '导航' },
        ]}
        itemHeight={40}
        fontSize={18}
        color="red"
        fontWeight={600}
        height={70}
        width={800}
        itemSideLine={{
          width: 4,
          height: 40,
          color: 'blue',
        }}
        containerSideLine={{
          height: 5,
          color: 'red',
          position: 'top',
          offset: 10,
        }}
        selected={{
          color: 'blue',
          sideLine: {
            height: 5,
            color: ['yellow', 'blue'],
            position: 'top',
            offset: 10,
            radius: 5,
          },
        }}
      />
      <br />
      <h1>第三种导航</h1>
      <N
        bgColor="#eee"
        bgImg="/logo/logo.png"
        mode="horizontal"
        data={[
          { content: '导航第一' },
          { content: '导航' },
          { content: '导航' },
          { content: '导航' },
        ]}
        itemHeight={40}
        itemBgColor="rgba(0, 0, 0, 0.5)"
        fontSize={18}
        color="red"
        fontWeight={600}
        height={70}
        width={800}
        itemBorder={{ borderRadius: 25, borderWidth: 2, borderStyle: 'solid', borderColor: '#000' }}
        itemMargin={{
          marginTop: 0,
          marginBottom: 0,
          marginRight: 20,
          marginLeft: 20,
        }}
        selected={{
          color: '#fff',
          bgColor: 'rgba(0, 0, 0, 0.8)',
        }}
        itemIcon={{
          url: 'img/icon.png',
          height: 30,
        }}
      />
      <br />
      <h1>第四种导航</h1>
      <N
        bgColor="#eee"
        mode="horizontal"
        data={[
          { content: '导航第一', subText: 'A paragraph of English' },
          { content: '导航', subText: 'A paragraph of English' },
          { content: '导航', subText: 'A paragraph of English' },
          { content: '导航', subText: 'A paragraph of English' },
        ]}
        itemHeight={40}
        fontSize={18}
        color="red"
        subFontSize={14}
        subColor="#000"
        fontWeight={600}
        height={70}
        width={800}
        selected={{
          textShadow: { h: 0, v: 0, blur: 5, color: 'red' },
          sideLine: {
            width: 100,
            height: 5,
            bgImg: 'img/line.png',
            position: 'bottom',
            offset: 10,
          },
        }}
      />
    </div>
  );
}
