SELECT COUNT(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
INNER JOIN teachers ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;