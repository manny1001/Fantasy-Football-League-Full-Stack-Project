export interface Root {
  data: Data
  meta: Meta
}

export interface Data {
  value: Value
  feedTime: FeedTime
}

export interface Value {
  playerList: PlayerList[]
}

export interface PlayerList {
  id: string
  pDName: string
  pFName: string
  latinName: string
  tName: string
  tId: string
  teamPlayed: number
  minsPlyd: number
  mTransferIn: number
  mTransferOut: number
  rating: number
  cCode: string
  skill: number
  value: number
  isActive: number
  selPer: number
  mdId: string
  totPts: number
  gS: number
  assist: number
  cS: number
  gC: number
  yC: number
  rC: number
  oG: number
  pS: number
  pC: number
  pE: number
  saves: number
  pM: number
  bR: number
  gOB: number
  mOM: number
  mOMPts: number
  pStatus: string
  matchAtd: string
  trained: string
  isPlayed: number
  selInPer: number
  selOutPer: number
  upcomingMatchesList: UpcomingMatchesList[]
  currentMatchesList: CurrentMatchesList[]
  avgPlayerPts: number
  avgPlayerValue: number
  lastGdPoints: number
  category1: number
  category2: number
  category3: number
  category4: number
  category5: number
  category6: number
  category7: number
  category8: number
  category9: number
  category10: number
  category11: number
  category12: number
  category13: number
  category14: number
  category15: number
  dTotPts: number
}

export interface UpcomingMatchesList {
  mdId?: string
  tId: string
  tSCode: string
  cCode: string
  tLoc?: string
  vsTID: string
  vsTSCode: string
  vsCCode: string
  matchDate: string
  vsTLoc?: string
}

export interface CurrentMatchesList {
  mdId?: string
  tId: string
  tSCode: string
  cCode: string
  tLoc?: string
  vsTID: string
  vsTSCode: string
  vsCCode: string
  matchDate: string
  vsTLoc?: string
}

export interface FeedTime {
  utcTime: string
  istTime: string
  cestTime: string
}

export interface Meta {
  message: string
  retVal: number
  success: boolean
  timestamp: Timestamp
}

export interface Timestamp {
  utcTime: string
  istTime: string
  cestTime: string
}
