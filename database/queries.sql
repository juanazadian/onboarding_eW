select items.item_name
from items join wishlist using (itemid)
where userid = 1;

select users.username, items.item_name
from users LEFT JOIN (wishlist JOIN items using (itemid)) using (userid)

select count(u1.userid)
from users u1
where not exists (	select 1
				from wishlist w1
				where w1.userid = u1.userid);

select  u1.username
from users u1 JOIN wishlist w1 using (userid)
where (not w1.completed) and 5 < ( select count(f1.userid_follows)
																		from followers f1
																		where f1.userid_follows = u1.userid ) GROUP BY (userid);
