CREATE KEYSPACE bookclub
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
};

USE bookclub;

CREATE TABLE meetings_by_date (
    meeting_date date,
    location text,
    book_title text,
    book_author text,
    attendees list<text>,
    PRIMARY KEY (meeting_date, location)
);

CREATE TABLE reviews_by_book (
    book_title text,
    review_date date,
    rating int,
    comment text,
    member_id int,
    PRIMARY KEY (book_title, review_date)
);

CREATE TABLE reviews_by_member (
    member_id int,
    review_date date,
    rating int,
    comment text,
    book_title text,
    PRIMARY KEY (member_id, review_date)
);

CREATE TABLE meetings_by_member (
    member_id int,
    meeting_date date,
    location text,
    book_title text,
    PRIMARY KEY (member_id, meeting_date)
);
