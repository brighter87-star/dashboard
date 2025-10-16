from datetime import date
from typing import Optional

from pydantic import BaseModel


class ScreeningRequest(BaseModel):
    date: str


class ScreeningResultOut(BaseModel):
    id: int
    T: str
    close_date: date
    c: float
    v: float
    RS_50: float
    RS_150: float
    RS_200: float
    stock_ret_50: float
    stock_ret_150: float
    stock_ret_200: float
    RS_50_pct: float
    RS_150_pct: float
    RS_200_pct: float
    RS_pct_mean: float
    high_52w: float
    low_52w: float

    class Config:
        orm_mode = True
