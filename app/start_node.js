wtf.fetch(['Royal Cinema', 'Aldous Huxley'], 'en', {
  'Api-User-Agent': 'spencermountain@gmail.com'
}).then((docList) => {
  let infoboxes = docList.map(doc => {
    return {
      title: doc.title(),
      infobox: doc.infoboxes(0)
    }
  });
  Document.getElementById(
    
});
