import S from './index';

export default function IndexText() {
  return (
    <div style={{ padding: 10 }}>
      <S
        bgColor="#fff"
        width={200}
        height={40}
        listHeight={200}
        onChange={(data, key) => console.log(data, key)}
        data={[
          { label: '下拉选项1下拉选项1下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
          { label: '下拉选项1', value: '下拉选项1' },
        ]}
        itemHover={{
          bgColor: '#f5f5f5',
        }}
        selected={{
          bgColor: '#e6f7ff',
        }}
      />
    </div>
  );
}
