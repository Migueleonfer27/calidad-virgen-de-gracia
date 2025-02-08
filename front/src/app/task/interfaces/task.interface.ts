export interface ResponseTask {
  cod:  number;
  data: TaskList[];
}

export interface TaskList {
  id:          number;
  description: string;
  end_date:    Date;
  Users:       UserAssigned[];
}

export interface UserAssigned {
  id:         number;
  first_name: string;
  last_name:  string;
  TaskUser:   TaskUser;
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
  task?: TaskList;
}
