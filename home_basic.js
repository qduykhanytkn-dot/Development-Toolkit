 // --- DỮ LIỆU THỜI KHÓA BIỂU CHUẨN ---
    const masterWeeklySchedule = {
        1: [
            { time: "06:30 - 07:15", title: "Chào cờ", room: "Sân trường", icon: "fa-flag", badge: "" },
            { time: "07:20 - 08:05", title: "Ngữ văn", room: "Phòng 7A1", icon: "fa-book-open", badge: "" },
            { time: "08:25 - 09:10", title: "Toán (Đại)", room: "Phòng 7A1", icon: "fa-calculator", badge: "" },
            { time: "09:15 - 10:00", title: "Toán (Đại)", room: "Phòng 7A1", icon: "fa-calculator", badge: "" },
            { time: "13:30 - 14:15", title: "Tiếng Anh", room: "Phòng 7A1", icon: "fa-language", badge: "" },
            { time: "14:20 - 15:05", title: "Tự học", room: "Phòng 7A1", icon: "fa-book-reader", badge: "" },
            { time: "15:25 - 16:10", title: "GDCD", room: "Phòng 7A1", icon: "fa-users", badge: "" },
            { time: "16:15 - 17:00", title: "BTVN", room: "Phòng 7A1", icon: "fa-pen-to-square", badge: "" }
        ],
        2: [
            { time: "06:30 - 07:15", title: "Toán (Hình)", room: "Phòng 7A1", icon: "fa-ruler-combined", badge: "Điểm danh" },
            { time: "07:20 - 08:05", title: "Toán (Hình)", room: "Phòng 7A1", icon: "fa-ruler-combined", badge: "" },
            { time: "08:25 - 09:10", title: "Sinh học", room: "Phòng Thực hành", icon: "fa-leaf", badge: "KT 15p" },
            { time: "09:15 - 10:00", title: "Sinh học", room: "Phòng Thực hành", icon: "fa-leaf", badge: "" },
            { time: "13:30 - 14:15", title: "Địa lí", room: "Phòng 7A1", icon: "fa-earth-americas", badge: "Nhóm" },
            { time: "14:20 - 15:05", title: "Địa lí", room: "Phòng 7A1", icon: "fa-earth-americas", badge: "" },
            { time: "15:25 - 16:10", title: "Tin ứng dụng", room: "Phòng Máy", icon: "fa-computer", badge: "" },
            { time: "16:15 - 17:00", title: "Tin ứng dụng", room: "Phòng Máy", icon: "fa-computer", badge: "" }
        ],
        3: [
            { time: "06:30 - 07:15", title: "Ngữ văn", room: "Phòng 7A1", icon: "fa-book-open", badge: "" },
            { time: "07:20 - 08:05", title: "Ngữ văn", room: "Phòng 7A1", icon: "fa-book-open", badge: "" },
            { time: "08:25 - 09:10", title: "Tin học", room: "Phòng Máy", icon: "fa-desktop", badge: "" },
            { time: "09:15 - 10:00", title: "Tin học", room: "Phòng Máy", icon: "fa-desktop", badge: "" },
            { time: "13:30 - 14:15", title: "Thể dục", room: "Sân vận động", icon: "fa-volleyball", badge: "" },
            { time: "14:20 - 15:05", title: "Thể dục", room: "Sân vận động", icon: "fa-volleyball", badge: "" },
            { time: "15:25 - 16:10", title: "Mỹ thuật", room: "Phòng Mỹ thuật", icon: "fa-palette", badge: "" },
            { time: "16:15 - 17:00", title: "Mỹ thuật", room: "Phòng Mỹ thuật", icon: "fa-palette", badge: "" }
        ],
        4: [
            { time: "06:30 - 07:15", title: "Tiếng Anh", room: "Phòng 7A1", icon: "fa-language", badge: "" },
            { time: "07:20 - 08:05", title: "Vật lý", room: "Phòng Thực hành", icon: "fa-microscope", badge: "" },
            { time: "08:25 - 09:10", title: "Hóa học", room: "Phòng Thực hành", icon: "fa-flask", badge: "" },
            { time: "09:15 - 10:00", title: "Lịch sử", room: "Phòng 7A1", icon: "fa-landmark", badge: "" },
            { time: "13:30 - 14:15", title: "HĐTN", room: "Sân trường", icon: "fa-people-group", badge: "" },
            { time: "14:20 - 15:05", title: "Kỹ năng", room: "Phòng 7A1", icon: "fa-lightbulb", badge: "" },
            { time: "15:25 - 16:10", title: "GDĐP", room: "Phòng 7A1", icon: "fa-map", badge: "" },
            { time: "16:15 - 17:00", title: "Sinh hoạt lớp", room: "Phòng 7A1", icon: "fa-chalkboard-user", badge: "" }
        ],
        5: [],
        6: []
    };

    // --- HÀM AUTH & KHỞI TẠO ---
    const authOverlay = document.getElementById('authOverlay');
    
    // HÀM LẤY LỜI CHÀO THEO BUỔI
    function getGreetingBySession() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 11) return "Chào buổi sáng";
        if (hour >= 11 && hour < 14) return "Chào buổi trưa";
        if (hour >= 14 && hour < 18) return "Chào buổi chiều";
        if (hour >= 18 && hour < 23) return "Chào buổi tối";
        return "Chào buổi khuya";
    }

    function getInitials(fullName) {
        if (!fullName) return 'ET';
        const words = fullName.trim().split(/\s+/);
        if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
    }
    
    function switchAuthTab(type) {
        if (type === 'login') {
            document.getElementById('tabLoginBtn').classList.add('active');
            document.getElementById('tabRegisterBtn').classList.remove('active');
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('registerForm').classList.add('hidden');
        } else {
            document.getElementById('tabRegisterBtn').classList.add('active');
            document.getElementById('tabLoginBtn').classList.remove('active');
            document.getElementById('registerForm').classList.remove('hidden');
            document.getElementById('loginForm').classList.add('hidden');
        }
    }
    document.getElementById('tabLoginBtn').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('tabRegisterBtn').addEventListener('click', () => switchAuthTab('register'));
    document.getElementById('linkToLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('linkToRegister').addEventListener('click', () => switchAuthTab('register'));

    function checkAuthStatus() {
        if (window.self !== window.top) {
            authOverlay.classList.add('hidden');
            return;
        }
        const storedUserRaw = localStorage.getItem('edutime_user');
        if (!storedUserRaw) {
            authOverlay.classList.remove('hidden');
            switchAuthTab('register');
        } else {
            const storedUser = JSON.parse(storedUserRaw);
            if (!storedUser.isLoggedIn) {
                authOverlay.classList.remove('hidden');
                switchAuthTab('login');
            } else {
                authOverlay.classList.add('hidden');
                // Cập nhật lời chào theo buổi
                document.getElementById('userGreeting').innerText = `${getGreetingBySession()}, ${storedUser.fullName}!`;
                document.getElementById('userAvatar').innerText = getInitials(storedUser.fullName);
            }
        }
    }

    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('regFullName').value.trim();
        const account = document.getElementById('regAccount').value.trim();
        const password = document.getElementById('regPassword').value;
        const newUser = { fullName, account, password, isLoggedIn: false };
        localStorage.setItem('edutime_user', JSON.stringify(newUser));
        alert('Tạo tài khoản thành công! Vui lòng Đăng nhập.');
        switchAuthTab('login');
        document.getElementById('loginAccount').value = account;
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const inputAccount = document.getElementById('loginAccount').value.trim();
        const inputPassword = document.getElementById('loginPassword').value;
        const storedUserRaw = localStorage.getItem('edutime_user');
        if (!storedUserRaw) {
            alert('Tài khoản chưa tồn tại! Vui lòng đăng ký trước.');
            switchAuthTab('register');
            return;
        }
        const storedUser = JSON.parse(storedUserRaw);
        if (inputAccount === storedUser.account && inputPassword === storedUser.password) {
            storedUser.isLoggedIn = true;
            localStorage.setItem('edutime_user', JSON.stringify(storedUser));
            authOverlay.classList.add('hidden');
            // Cập nhật lời chào theo buổi
            document.getElementById('userGreeting').innerText = `${getGreetingBySession()}, ${storedUser.fullName}!`;
            document.getElementById('userAvatar').innerText = getInitials(storedUser.fullName);
        } else {
            alert('Tài khoản hoặc Mật khẩu không chính xác!');
        }
    });

    function loadTodaySchedule() {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const options = { weekday: 'long', day: 'numeric', month: 'numeric' };
        document.getElementById('todayDateText').innerText = today.toLocaleDateString('vi-VN', options);
        const container = document.getElementById('todayScheduleContainer');
        const badgeCount = document.getElementById('todayClassCount');
        const todayList = masterWeeklySchedule[dayOfWeek] || [];
        badgeCount.innerText = `${todayList.length} tiết học`;

        if (todayList.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 25px; color: var(--text-muted); background: white; border-radius: 12px; border: 1px solid #f0f0f0;">
                    <i class="fa-solid fa-mug-hot" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 8px;"></i>
                    <p style="font-size: 0.9rem; font-weight: 600;">Hôm nay bạn không có lịch học nào. Hãy nghỉ ngơi hoặc ôn tập nhé!</p>
                </div>`;
            return;
        }

        const currentTotalMinutes = today.getHours() * 60 + today.getMinutes();
        let htmlContent = '';
        todayList.forEach(item => {
            const [startStr, endStr] = item.time.split(' - ');
            const startMins = parseInt(startStr.split(':')[0]) * 60 + parseInt(startStr.split(':')[1]);
            const endMins = parseInt(endStr.split(':')[0]) * 60 + parseInt(endStr.split(':')[1]);

            let statusClass = 'upcoming', statusText = 'Sắp tới', statusIcon = '', cardActive = '', timeColor = '', actionButtons = '';
            if (currentTotalMinutes > endMins) {
                statusClass = 'done'; statusText = 'Đã hoàn thành'; statusIcon = '<i class="fa-solid fa-check-circle"></i>';
            } else if (currentTotalMinutes >= startMins && currentTotalMinutes <= endMins) {
                statusClass = 'now'; statusText = 'Đang diễn ra'; statusIcon = '<i class="fa-solid fa-circle"></i>';
                cardActive = 'active'; timeColor = 'style="color: var(--primary)"';
                actionButtons = `
                    <div class="card-actions">
                        <button class="btn-primary"><i class="fa-regular fa-circle-play"></i> Xem bài giảng</button>
                        <div class="icon-btn"><i class="fa-regular fa-file-lines"></i></div>
                    </div>`;
            }
            htmlContent += `
                <div class="card ${cardActive}">
                    <div class="card-top">
                        <div class="time" ${timeColor}><i class="fa-regular fa-clock"></i> ${item.time}</div>
                        <div class="status ${statusClass}">${statusIcon} ${statusText}</div>
                    </div>
                    <div class="card-body">
                        <div class="card-info">
                            <h3>${item.title} ${item.badge ? `<span style="font-size:0.65rem; background:var(--primary-light); color:var(--primary); padding:2px 6px; border-radius:4px; margin-left:6px;">${item.badge}</span>` : ''}</h3>
                            <div class="card-meta"><span><i class="fa-solid fa-door-open"></i> ${item.room}</span></div>
                        </div>
                        <div class="icon-btn"><i class="fa-solid ${item.icon}"></i></div>
                    </div>
                    ${actionButtons}
                </div>`;
        });
        container.innerHTML = htmlContent;
    }

    // --- TIẾN ĐỘ THỜI GIAN HỌC ---
    function getTodayKey() {
        const d = new Date();
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    }
    function updateProgressCard() {
        const todayKey = getTodayKey();
        const focusData = JSON.parse(localStorage.getItem('edutime_focus_daily') || '{}');
        const todaySeconds = focusData[todayKey] || 0;
        const totalMinutes = Math.floor(todaySeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        const goalMinutes = 300; 
        const percentage = Math.min(100, Math.floor((totalMinutes / goalMinutes) * 100));

        if (document.getElementById('progressTimeDisplay')) {
            document.getElementById('progressTimeDisplay').innerHTML = `${hours}h ${mins}m <span>/ 5h 00m</span>`;
        }
        if (document.getElementById('progressCircleDisplay')) {
            document.getElementById('progressCircleDisplay').innerText = `${percentage}%`;
        }
    }

    // ================= LOGIC XỬ LÝ NHIỆM VỤ / BÀI TẬP HÔM NAY =================
    function loadTasks() {
        const todayKey = getTodayKey();
        const tasks = JSON.parse(localStorage.getItem(`edutime_tasks_${todayKey}`) || '[]');
        const container = document.getElementById('taskListContainer');
        const badge = document.getElementById('taskCountBadge');
        
        badge.innerText = `${tasks.length} bài`;
        
        if (tasks.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 20px; border: 1px dashed #cbd5e1; border-radius: 12px; color: var(--text-muted);">
                    <p style="font-size: 0.85rem;"><i class="fa-regular fa-face-smile-wink"></i> Chưa có nhiệm vụ nào. Hãy thêm vào nhé!</p>
                </div>
            `;
            return;
        }

        let html = '';
        tasks.forEach((task, index) => {
            html += `
                <div class="task-item ${task.completed ? 'completed' : ''}">
                    <div class="task-checkbox" onclick="toggleTask(${index})"></div>
                    <div class="task-info">
                        <h4>${task.name}</h4>
                        <p><strong><i class="fa-regular fa-clock"></i> ${task.duration} phút</strong></p>
                    </div>
                    <button class="delete-task-btn" onclick="deleteTask(${index})">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    document.getElementById('addTaskBtn').addEventListener('click', () => {
        const nameInput = document.getElementById('taskNameInput');
        const timeInput = document.getElementById('taskTimeInput');
        
        const name = nameInput.value.trim();
        const duration = timeInput.value.trim();

        if (!name) {
            alert('Vui lòng nhập tên nhiệm vụ!');
            return;
        }
        if (!duration || duration <= 0) {
            alert('Vui lòng nhập số phút hợp lệ!');
            return;
        }

        const todayKey = getTodayKey();
        const tasks = JSON.parse(localStorage.getItem(`edutime_tasks_${todayKey}`) || '[]');
        
        tasks.unshift({ name, duration, completed: false });
        localStorage.setItem(`edutime_tasks_${todayKey}`, JSON.stringify(tasks));
        
        nameInput.value = '';
        timeInput.value = '';
        
        loadTasks(); 
    });

    window.toggleTask = function(index) {
        const todayKey = getTodayKey();
        const tasks = JSON.parse(localStorage.getItem(`edutime_tasks_${todayKey}`) || '[]');
        
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem(`edutime_tasks_${todayKey}`, JSON.stringify(tasks));
        
        loadTasks();
    };

    window.deleteTask = function(index) {
        if(confirm('Bạn có chắc muốn xóa bài tập này khỏi danh sách?')) {
            const todayKey = getTodayKey();
            const tasks = JSON.parse(localStorage.getItem(`edutime_tasks_${todayKey}`) || '[]');
            
            tasks.splice(index, 1);
            localStorage.setItem(`edutime_tasks_${todayKey}`, JSON.stringify(tasks));
            
            loadTasks();
        }
    };

    // --- BOTTOM NAV (SIDEBAR DESKTOP) & IFRAME ---
    const navItems = document.querySelectorAll('.nav-item');
    const iframePopup = document.getElementById('iframePopup');
    const appFrame = document.getElementById('appFrame');
    const goToCalendarBtn = document.getElementById('goToCalendarBtn');

    function openCalendarTab() {
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-tab="calendar"]').classList.add('active');
        appFrame.src = "https://edutimethcshm.blogspot.com/p/classschedule.html";
        iframePopup.classList.add('show');
    }
    if (goToCalendarBtn) goToCalendarBtn.addEventListener('click', openCalendarTab);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            const tabId = item.getAttribute('data-tab');
            const targetUrl = item.getAttribute('data-url');

            if (tabId === 'home') {
                iframePopup.classList.remove('show');
                setTimeout(() => { if (!iframePopup.classList.contains('show')) appFrame.src = ""; }, 400);
                updateProgressCard();
            } else {
                if (appFrame.src !== targetUrl) appFrame.src = targetUrl;
                iframePopup.classList.add('show');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        checkAuthStatus();
        loadTodaySchedule();
        updateProgressCard();
        loadTasks(); 
    });