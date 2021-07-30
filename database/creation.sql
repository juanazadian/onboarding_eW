CREATE TABLE users(
	userid serial PRIMARY KEY,
	username VARCHAR (50) NOT NULL
);

CREATE TABLE items(
	itemid serial PRIMARY KEY,
	item_name VARCHAR (50) NOT NULL,
	cost VARCHAR (50) NOT NULL
);

CREATE TABLE wishlist(
	userid serial,
	itemid serial,
	completed BOOLEAN NOT NULL,
	PRIMARY KEY (userid,itemid)
);

ALTER TABLE wishlist
ADD FOREIGN KEY (userid) REFERENCES users(userid);

ALTER TABLE wishlist
ADD FOREIGN KEY (itemid) REFERENCES items(itemid);


CREATE TABLE followers(
	userid_follower serial,
	userid_follows serial,
	PRIMARY KEY (userid_follower, userid_follows),
	FOREIGN KEY (userid_follower) REFERENCES users(userid),
	FOREIGN KEY (userid_follows) REFERENCES users(userid)
);



