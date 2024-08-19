
        // بارگذاری داده‌ها از فایل JSON
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('name').textContent = data.name;
                document.getElementById('id').textContent = data.id;
                document.getElementById('number').textContent = data.number;
                document.getElementById('magnitude').textContent = data.magnitude;
                document.getElementById('peak_date').textContent = data.peak_date;
                document.getElementById('constellation').textContent = data.constellation;
                document.getElementById('shower_class').textContent = data.shower_class;
                document.getElementById('parent_body').textContent = data.parent_body;
                document.getElementById('activity_period').textContent = data.activity_period;
                document.getElementById('zenith_hourly_rate').textContent = data.zenith_hourly_rate;
                document.getElementById('velocity').textContent = data.velocity;
                document.getElementById('radiant').textContent = data.radiant;
                document.getElementById('related_comets').textContent = data.related_comets.join(', ');
                document.getElementById('is_active').textContent = data.is_active ? 'Yes' : 'No';
            })
            .catch(error => console.error('Error loading JSON data:', error));
window.alert("دیتاها");