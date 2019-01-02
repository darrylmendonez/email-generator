const initState = {
  emails: [
    {id: '1', title: 'New Journals', date: 'December 1-15', highlights: ['lorem ipsum', 'muspi merol'], descriptions: ['American Journal #151 analyzes the latest in pharma stock companies based out of New Jersey', 'Pharma Con 2019 overviews the latest vendors and guest speakers attending Pharma Con 2019 coming this March']},
    {id: '2', title: 'Latest Research', date: 'December 15-31', highlights: ['lorem ipsum', 'muspi merol'], descriptions: ['Scientific Discovery #32 overviews the latest research in oncology', 'Global Medicine shares the results of clinical trials done for cancer research']},
    {id: '3', title: 'New Year, Same Focus', date: 'January 1-15', highlights: ['lorem  ipsum', 'muspi merol'], descriptions: ['Monthly Research #12 analyzes the latest in pharma stock companies based out of New Jersey', 'Pipeline Bulletin #45 goes in depth into current clinical trials']},    
  ]
}

const emailReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_EMAIL': 
      console.log('created project', action.project);
      return state;
    case 'CREATE_EMAIL_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state
  }
}

export default emailReducer