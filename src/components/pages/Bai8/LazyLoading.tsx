function generateLorem(times = 100) {
  const sample =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. ";
  return Array.from({ length: times }, () => sample).join("\n\n");
}

export default function LazyLoadComp() {
  const text = generateLorem(100);

  return (
    <div style={{ padding: 20 }}>
      <p>{text}</p>
    </div>
  );
}
