import expect from 'expect'
import * as Reducers from '../src/reducer.js'

describe('reducers', ()=>{
  it('should return the bookDetail with specific bookId',()=>{
    var mockedAction={
      type:'GETEBOOKDETAIL',
      id: 1
    }
    var expectedBook={ id:1,
      title:'深入浅出Node.js',
      author:'朴灵',
      publishedDate:'2013-12-1'};

    var targetState=Reducers.ebookDetail(undefined, mockedAction)
    expect(targetState).toEqual(expectedBook)
  })
})
