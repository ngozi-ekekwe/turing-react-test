import * as TuringAPI from '../../services/api';

describe('API Endpoint', () => {
  beforeEach(() => {
    TuringAPI.apiGetRequest = jest.fn((path) => 'success');
    TuringAPI.apiPostRequest = jest.fn((path) => 'success');
    TuringAPI.apiPutRequest = jest.fn((path) => 'success');
  });

  it('should return a complete endpont', () => {
    const path = TuringAPI.endpoint('customer')
    expect(path).toEqual('https://backendapi.turing.com/customer');
  })

  it('should call the right endpoint', async () => {
    const path = 'departments';
    const response = await TuringAPI.getDepartments(path)
    expect(response).toBeInstanceOf(Array);
  })
})