-- Postgresql- (Primary key and forign key relation needed)
-- Set-2:
-- Add order in order table for product and write the query in function to return all the order placed in given date range
	

-------------create table--------------------
CREATE TABLE Order_Product (
	name varchar(20),
	order_date Date
)

-------------insert into the table------------
insert into Order_Product (name, order_date)
values ('laptop','2024-08-03'),
	('rakhi','2024-08-07'),('bluetooth','2024-08-04'),
	('tv','2024-08-01'),('shoe','2024-08-06'),
	('watch','2024-08-03'),('toy','2024-08-02')


-------------display table-------------------
select * from Order_Product

------------function-------------------------
CREATE OR REPLACE FUNCTION GetOrderInDateRange (startDate Date, endDate Date)
RETURNS TABLE(name varchar(20), order_date Date) AS $$
BEGIN
	RETURN QUERY
	SELECT op.name, op.order_date FROM Order_Product as op
    WHERE op.order_date BETWEEN startDate AND endDate;
END;
$$ LANGUAGE plpgsql;


-------------function call------------------
SELECT * from GetOrderInDateRange('2024-08-01','2024-08-04');

