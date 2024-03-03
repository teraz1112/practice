-- studentsテーブルにnameをKaty、courseをHTMLとしたレコードを追加してください。
insert into students(name,course)
values("Katy","HTML");

-- studentsテーブルのidカラムの値が6のレコードのnameをJuliet、courseをRubyに更新してください。
update students
set name="Juliet",course="Ruby"
where id=6;

-- studentsテーブルのidカラムの値が2のレコードを削除してください。
delete from students
where id=2;

-- 下記のクエリは消さないでください。
SELECT * FROM students;
