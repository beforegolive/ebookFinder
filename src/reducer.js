var mockBooks=[
  { title:'深入浅出Node.js', author:'朴灵', publishedDate:'2013-12-1'},
  { title:'Getting Started with React Native', author:'Ethan Holmes, Tom Bray ', publishedDate:'2014-11-1'},
  { title:'代码的未来', author:'松本行弘', publishedDate:'2011-7-1'},
  { title:'图解HTTP', author:'上野', publishedDate:'2010-2-1'},
  { title:'深入浅出Node.js', author:'朴灵', publishedDate:'2013-12-1'},
  { title:'Getting Started with React Native', author:'Ethan Holmes, Tom Bray ', publishedDate:'2014-11-1'},
  { title:'代码的未来', author:'松本行弘', publishedDate:'2011-7-1'},
  { title:'图解HTTP', author:'上野', publishedDate:'2010-2-1'}
]

export function searchBook(state={keyword:'',bookList:[]}, action){
  switch (action.type) {
    case 'SEARCHBOOK':
      var newState = {
        ...state,
        keyword:action.keyword,
        // bookList:[{name:'b1'},{name:'b2'}]
        bookList: mockBooks
      }
      console.log(newState);
      return newState;
    default:
      return state;

  }
}

export function storeNavigator(state = {}, action){
  switch (action.type) {
    case 'STORENAVIGATOR':
      return {
        navigator: action.navigator
      }
    default:
      return state;
  }
}
