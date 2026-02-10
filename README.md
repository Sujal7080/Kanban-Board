# Kanban Board

A simple, drag-and-drop Kanban board application built with vanilla JavaScript, HTML, and CSS. Manage your tasks across three columns: To Do, In Progress, and Done.

## Features

- **Drag & Drop**: Move tasks between columns by dragging them
- **Add Tasks**: Create new tasks with a title and description
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are saved to localStorage and persist across sessions
- **Task Counter**: Each column displays the number of tasks it contains
- **Dark Theme**: Modern dark UI with smooth animations

## Getting Started

Simply open `index.html` in your web browser. No build process or dependencies required.

## Usage

### Adding a Task
1. Click the "Add New Task" button in the navigation bar
2. Enter a task title (required) and description (optional)
3. Click "Add Task" to create it in the "To Do" column

### Moving Tasks
- Click and drag any task to move it between columns
- The column will highlight when you hover over it during a drag

### Deleting Tasks
- Click the "Delete" button on any task to remove it

## File Structure

- `index.html` - Main HTML structure with three task columns and modal
- `script.js` - JavaScript for drag-and-drop, localStorage, and task management
- `style.css` - Dark theme styling with CSS variables for easy customization

## Customization

You can customize the color scheme by modifying CSS variables in `style.css`:

```css
:root {
  --bg-color: #000000;
  --bg-button-color: #1a1a1a;
  --bg-task-color: #2a2a2a;
  --primary-text-color: #f4f4f4;
  --delete-color: #ff4d4d;
}
```

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Drag and Drop API
- localStorage
- CSS Grid and Flexbox

Free to use and modify as needed.
