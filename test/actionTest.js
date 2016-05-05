import * as Actions from '../src/actionCreator.js'
import expect from 'expect'

describe('actions', ()=>{
  it('should get bookDetail with specific id', ()=>{
    let id=1
    let expectedAction={
      type:'GETEBOOKDETAIL',
      id
    }

    expect(Actions.geteBookDetail(id)).toEqual(expectedAction)
  }),
  it('should get searchBookAction with keyword',()=>{
      let keyword='nodejs'
      let expectedAction = {
        type:'SEARCHBOOK',
        keyword
      }

      expect(Actions.searchBookAction(keyword)).toEqual(expectedAction)
  })
})
