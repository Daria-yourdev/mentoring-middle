import { Folder, FoldersErrors } from '../../../../../data-access/src';
import { DeepReadonly } from '../../../../../../../core/utils/src';
import { LoadingStatus } from '../../../../../../../core/data-access/src';

export type FoldersListVM = DeepReadonly<{
  folders: Folder[];
  status: LoadingStatus;
}>;
