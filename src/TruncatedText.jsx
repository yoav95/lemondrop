

const TruncatedText = ({ text, maxLength }) => {
  // Function to truncate text
  const truncatedText =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return <p>{truncatedText}</p>;
};

export default TruncatedText;
