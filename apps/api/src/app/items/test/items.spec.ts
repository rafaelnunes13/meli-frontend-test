import axios from 'axios';
import items from '../items';
import * as listMapper from '../list/list-mapper';
import { listTestSupport } from './items-list.support';
import { detailTestSupport } from './items-detail.support';

describe('items.spec | Items', () => {
  it('should call the list api and map the result', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ data: listTestSupport.source });

    const mapperSpy = jest.spyOn(listMapper, 'default');
    const responseSpy = jest.spyOn(listTestSupport.mockListResponse, 'json');

    await items.list(listTestSupport.mockListRequest, listTestSupport.mockListResponse).then();

    expect(mockGet).toHaveBeenCalled();
    expect(responseSpy).toHaveBeenCalledWith(listTestSupport.response);
    expect(mapperSpy).toHaveBeenCalled();
  });

  it('should call the detail api and map the result', async () => {
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation(detailTestSupport.mockGetImplementation);

    const mapperSpy = jest.spyOn(listMapper, 'default');
    const responseSpy = jest.spyOn(listTestSupport.mockListResponse, 'json');

    await items.list(listTestSupport.mockListRequest, listTestSupport.mockListResponse).then();

    expect(mockGet).toHaveBeenCalled();
    expect(responseSpy).toHaveBeenCalledWith(listTestSupport.response);
    expect(mapperSpy).toHaveBeenCalled();
  });
});
