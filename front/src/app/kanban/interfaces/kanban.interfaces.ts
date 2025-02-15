export interface Task {
  id: number;
  description: string;
  end_date: string;
  TaskUser: {
    state: number;
    id_user: number;
  };
  Documents: Document[]
}

export interface TaskResponse {
  cod: number;
  data: Task[];
}

export interface Document {
  id: number,
  name: string,
  code: string,
  url: string
}
