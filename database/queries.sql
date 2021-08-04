SELECT items.item_name
FROM items
JOIN wishlist USING (itemid)
WHERE userid = 1;

SELECT users.username, items.item_name
FROM users
LEFT JOIN (wishlist
          JOIN items USING (itemid)) USING (userid)

SELECT count(u1.userid)
FROM users u1
WHERE NOT EXISTS (SELECT 1
                  FROM wishlist w1
                  WHERE w1.userid = u1.userid);

SELECT u.username, COUNT(f.userid_follows)
FROM followers f
JOIN users u ON u.userid = f.userid_follows
WHERE EXISTS (SELECT 1
              FROM wishlist w
              WHERE NOT w.completed AND u.userid = w.userid)
GROUP BY u.userid
HAVING COUNT(f.userid_follows) > 5
