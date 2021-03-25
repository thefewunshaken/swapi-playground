// only 
function detailShouldDisplay (detail) {
  if (typeof detail !== 'object' && !Date.parse(detail)) {
    // ignore blank entries and links
    if (!(detail ==='n/a' || detail === 'none' || detail.includes('http') )) {
      return true;
    }
  }
  return false;
}

function PersonDetails ({ person }) {
  let details = [];

  for (const [key, value] of Object.entries(person)) {
    if (detailShouldDisplay(value)) {
      details.push(<p key={key} className="lh-copy measure tc f6 black-70">{key}: {value}</p>);
    }
  }

  return (
    <>
      {details}
    </>
  );

}

export default PersonDetails;