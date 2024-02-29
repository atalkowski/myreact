
SQL="
create database if not exists MYREACT;
use MYREACT;

create table if not exists JOB (
    ID int NOT NULL AUTO_INCREMENT,
    COMPANY varchar(255) NOT NULL,
    TITLE varchar(255) NOT NULL,
    LOCATION varchar(255),
    SALARY varchar(255),
    LINK varchar(1024),
    LINKTYPE varchar(31),
    STATUS varchar(31) default 'APPLIED',
    APPLYDATE datetime default now(),
    PRIMARY KEY (Id)
);"

echo "$SQL" | mysql
