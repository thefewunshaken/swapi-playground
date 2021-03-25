function Scroll({ children }) {
  return (
    <div className="vh-75" style={{ overflowY: 'scroll'}}>
      {children}
    </div>
    );
}

export default Scroll;
