from datetime import date

from sqlalchemy import BIGINT, DECIMAL, Date, Integer, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class ScreeningResultModel(Base):
    __tablename__ = "minervini_screening_results"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    T: Mapped[str] = mapped_column(String(10), nullable=False)
    close_date: Mapped[date] = mapped_column(Date, nullable=False)
    c: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    v: Mapped[float] = mapped_column(BIGINT, nullable=True)
    RS_50: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    RS_150: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    RS_200: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    stock_ret_50: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    stock_ret_150: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    stock_ret_200: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    RS_50_pct: Mapped[float] = mapped_column(DECIMAL(10, 6), nullable=True)
    RS_150_pct: Mapped[float] = mapped_column(DECIMAL(10, 6), nullable=True)
    RS_200_pct: Mapped[float] = mapped_column(DECIMAL(10, 6), nullable=True)
    RS_pct_mean: Mapped[float] = mapped_column(DECIMAL(10, 6), nullable=True)
    high_52w: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
    low_52w: Mapped[float] = mapped_column(DECIMAL(10, 4), nullable=True)
