export default async function CtaButtons({
  params,
}: {
  params: { key: string }
}) {
  let btnTxt = 'Learn more';
  let btnUrl;
  let btnStyle = 'default';
  params &&
  params.map((item) => {
    item.key === 'Text' ? 
      btnTxt = item.value 
      : item.key === 'URL' ? 
      btnUrl = item.value
      : item.key === 'Style' ? 
      btnStyle = item.value
      : '';
  })
  //console.log(btnTxt+'--'+btnStyle)
  return (
          <>
          <a href={btnUrl} className={`btn-${btnStyle}`} target="_self" data-class="">{btnTxt}</a>  
          </>
  )
}
