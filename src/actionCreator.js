export function searchBookAction(keyword){
  return { type:'SEARCHBOOK', keyword}
}

export function geteBookDetail(id){
  return { type:'GETEBOOKDETAIL', id}
}
