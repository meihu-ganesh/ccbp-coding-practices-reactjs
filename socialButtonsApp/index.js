const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <>
    <h1>Social Buttons</h1>
    <div className="buttonContainer">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </>
);

ReactDOM.render(element, document.getElementById("root"));
