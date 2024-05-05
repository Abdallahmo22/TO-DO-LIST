// إعداد المتغيرات
const newItemInput = document.getElementById('newItem');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// وظيفة إضافة مهمة جديدة
function addTask() {
    const newItemText = newItemInput.value.trim();

    if (newItemText) {
        // إنشاء عنصر قائمة جديد
        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText;

        // إضافة زر الإتمام
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Done';
        completeButton.addEventListener('click', function() {
            newListItem.classList.toggle('completed');
        });
        newListItem.appendChild(completeButton);

        // إضافة زر الحذف
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newListItem);
        });
        newListItem.appendChild(deleteButton);

        // إضافة العنصر الجديد إلى القائمة
        taskList.appendChild(newListItem);

        // مسح حقل الإدخال
        newItemInput.value = '';
    }
}

// ربط وظيفة الإضافة بالزر
addButton.addEventListener('click', addTask);
