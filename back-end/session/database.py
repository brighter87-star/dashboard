import os
from contextlib import contextmanager

from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


class SessionManager:
    def __init__(self, database_url: str):
        self.engine = create_engine(database_url)
        self.SessionLocal = sessionmaker(
            autocommit=False, autoflush=False, bind=self.engine
        )

    @contextmanager
    def get_session(self):
        db = self.SessionLocal()
        try:
            yield db
        finally:
            db.close()


load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

db_manager = SessionManager(DATABASE_URL)


def get_db():
    with db_manager.get_session() as db:
        yield db
