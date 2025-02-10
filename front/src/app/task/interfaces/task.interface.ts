
export interface EditResponse {
  cod:  number;
  data: EditedTask;
}

export interface EditedTask {
  id:          number;
  description: string;
  end_date:    Date;
  type:        number;
  createdAt:   Date;
  updatedAt:   Date;
  deletedAt:   null;
}

export interface ResponseTask {
  cod:  number;
  data: Task[];
}

export interface Task {
  id:          number;
  description: string;
  type:        number;
  end_date:    Date;
  Users?:       UserAssigned[];
  Documents?:   Document[];
}

export interface UserAssigned {
  id:         number;
  first_name: string;
  last_name:  string;
  TaskUser:   TaskUser;
}
export interface Document {
  id:   number;
  name: string;
  code: string;
  url:  string;
}
export interface TaskUser {
  state: number;
}

export interface CacheStore
{
  userTask: UserTaskCache,

}

export interface UserTaskCache{
  users?: UserAssigned[];
  documents?: Document[];
  task?: Task;
}
