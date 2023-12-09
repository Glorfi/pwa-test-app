import { IUser } from 'interfaces/dummy';
import { trimUrl } from './trimUrs';

export function getCurrentUserFromCache(data: IUser[], pathname: string) {
  return data?.find((item: IUser) => {
    return item.id.toString() === trimUrl(pathname);
  });
}
