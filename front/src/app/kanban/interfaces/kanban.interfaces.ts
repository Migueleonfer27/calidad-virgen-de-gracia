export interface Task {
  id: number;
  description: string;
  end_date: string;
  Users: TaskUser[];
}

export interface TaskUser {
  id: number;
  first_name: string;
  last_name: string;
  TaskUser: {
    state: number;
  };
}

export interface TaskResponse {
  cod: number;
  data: Task[];
}
