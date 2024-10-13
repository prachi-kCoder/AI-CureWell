from sqlalchemy.orm import Session
from models import Advance

def create_advance(db: Session, advance_data):
    db_advance = Advance(
        id=advance_data["id"],
        title=advance_data["title"],
        journal=advance_data["journal"],
        published_date=advance_data["publishedDate"],
        condition=advance_data["condition"],
        treatment_used=advance_data["treatmentUsed"],
        url=advance_data["url"]
    )
    db.add(db_advance)
    db.commit()
    db.refresh(db_advance)
    return db_advance
