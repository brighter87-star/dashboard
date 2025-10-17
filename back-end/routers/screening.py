from typing import List

from fastapi import APIRouter, Depends
from models.screening import ScreeningResultModel
from schemas.screening import ScreeningRequest, ScreeningResultOut
from session.database import get_db
from sqlalchemy.orm import Session

router = APIRouter(prefix="/api/screening")


@router.post("/minervini", response_model=List[ScreeningResultOut])
def fetchMinerviniResults(
    request_data: ScreeningRequest, db: Session = Depends(get_db)
):
    result = (
        db.query(ScreeningResultModel)
        .filter(
            ScreeningResultModel.close_date == request_data.date,
            ScreeningResultModel.v > 10000000,
        )
        .all()
    )
    return result
