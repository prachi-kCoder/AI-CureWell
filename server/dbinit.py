# dbinit.py
from sqlalchemy.orm import Session
from models import Advance, Base
from database import engine
from data import advances_data
from database import SessionLocal
# Create all tables (you can use this when running for the first time)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
def create_tables():
    Base.metadata.create_all(bind=engine)

# Populate the database with initial data
def populate_database(db: Session):
    for record in advances_data:
        db_advance = Advance(
            id=record["id"],
            title=record["title"],
            journal=record["journal"],
            published_date=record["publishedDate"],
            condition=record["condition"],
            treatment_used=record["treatmentUsed"],
            url=record["url"]
        )
        db.add(db_advance)
    db.commit()

if __name__ == "__main__":
    create_tables()
    db = next(get_db())
    populate_database(db)
