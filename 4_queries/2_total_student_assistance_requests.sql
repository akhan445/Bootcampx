SELECT COUNT(assistance_requests.*) as total_assistances, students.name
FROM assistance_requests
INNER JOIN students ON student_id = students.id
wHERE name = 'Elliot Dickinson'
GROUP BY students.name;