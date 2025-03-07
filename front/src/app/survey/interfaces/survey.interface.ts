// Jaime Ortega
export interface Survey {
  id: number
  page_id: number
  user_id: number
  final_score: number
}

export interface SurveyResponse {
  survey_id: number
  question_id: number
  answer: number
}

export interface Question {
  id: number
  text: string
  options: number[]
  selectedAnswer?: number
}
