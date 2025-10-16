from typing import List

from fastapi import APIRouter, Depends
from models.screening import ScreeningResultModel
from schemas.screening import ScreeningRequest, ScreeningResultOut
from session.database import get_db
from sqlalchemy.orm import Session

router = APIRouter()


@router.post("/api/screening/minervini", response_model=List[ScreeningResultOut])
def fetchMinerviniResults(
    request_data: ScreeningRequest, db: Session = Depends(get_db)
):
    result = db.query(ScreeningResultModel).all()
    return result
