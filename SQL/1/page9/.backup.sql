PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "purchases" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "price" integer, "character_name" varchar, "category" varchar, "purchased_at" date);
INSERT INTO purchases VALUES(1,'スマホケース','1500','にんじゃわんこ','雑費','2017-07-01');
INSERT INTO purchases VALUES(2,'お弁当','500','ひつじ仙人','食費','2017-07-01');
INSERT INTO purchases VALUES(3,'ワンピース','3000','とりずきん','雑費','2017-07-01');
INSERT INTO purchases VALUES(4,'参考書',NULL,'にんじゃわんこ','雑費','2017-07-01');
INSERT INTO purchases VALUES(5,'電車賃',NULL,'ひつじ仙人','交通費','2017-07-01');
INSERT INTO purchases VALUES(6,'プリン','150','にんじゃわんこ','食費','2017-07-02');
INSERT INTO purchases VALUES(7,'サッカーボール','2500','ベイビーわんこ','雑費','2017-07-02');
INSERT INTO purchases VALUES(8,'電卓','700','ひつじ仙人','雑費','2017-07-04');
INSERT INTO purchases VALUES(9,'お弁当',NULL,'にんじゃわんこ','食費','2017-07-04');
INSERT INTO purchases VALUES(10,'プリンパフェ','500','にんじゃわんこ','食費','2017-07-04');
INSERT INTO purchases VALUES(11,'タクシー代','1200','とりずきん','交通費','2017-07-09');
INSERT INTO purchases VALUES(12,'わたあめ','100','ベイビーわんこ','食費','2017-07-10');
INSERT INTO purchases VALUES(13,'眼鏡','5000','ひつじ仙人','雑費','2017-07-10');
INSERT INTO purchases VALUES(14,'焼きプリン','200','にんじゃわんこ','食費','2017-07-10');
INSERT INTO purchases VALUES(15,'ハンドバッグ','8000','とりずきん','雑費','2017-07-15');
INSERT INTO purchases VALUES(16,'豆乳クッキー','300','とりずきん','食費','2017-07-15');
INSERT INTO purchases VALUES(17,'牛丼','600','にんじゃわんこ','食費','2017-07-15');
INSERT INTO purchases VALUES(18,'焼き魚定食','550','ひつじ仙人','食費','2017-07-15');
INSERT INTO purchases VALUES(19,'ノート','150','ベイビーわんこ','雑費','2017-07-21');
INSERT INTO purchases VALUES(20,'えんぴつ','100','ベイビーわんこ','雑費','2017-07-24');
INSERT INTO purchases VALUES(21,'チーク','800','とりずきん','雑費','2017-07-24');
INSERT INTO purchases VALUES(22,'駐輪代','200','にんじゃわんこ','交通費','2017-07-28');
INSERT INTO purchases VALUES(23,'バター',NULL,'ひつじ仙人','食費','2017-07-28');
INSERT INTO purchases VALUES(24,'じゃがいも','50','ひつじ仙人','食費','2017-07-28');
INSERT INTO purchases VALUES(25,'牛乳プリン','100','にんじゃわんこ','食費','2017-07-28');
INSERT INTO purchases VALUES(26,'バス代','230','ひつじ仙人','交通費','2017-08-02');
INSERT INTO purchases VALUES(27,'ふんわりパンケーキ',NULL,'とりずきん','食費','2017-08-02');
INSERT INTO purchases VALUES(28,'焼きプリン大福','140','にんじゃわんこ','食費','2017-08-03');
INSERT INTO purchases VALUES(29,'電子工作キット','5400','にんじゃわんこ','雑費','2017-08-07');
INSERT INTO purchases VALUES(30,'柔軟剤',NULL,'とりずきん','雑費','2017-08-07');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('purchases',30);
COMMIT;



