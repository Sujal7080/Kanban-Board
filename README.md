# Kanban Board

A simple, drag-and-drop Kanban board application built with vanilla JavaScript, HTML, and CSS. Manage your tasks across three columns: To Do, In Progress, and Done.

## Features

- **Drag & Drop**: Move tasks between columns by dragging them
- **Add Tasks**: Create new tasks with a title and description
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are saved to localStorage and persist across sessions
- **Task Counter**: Each column displays the number of tasks it contains
- **Modern UI**: Enhanced dark theme with smooth animations, gradient accents, and polished interactions
- **Satoshi Font**: Clean, modern typography using the Satoshi font family

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
  --bg-color: #0a0a0f;
  --bg-button-color: #1a1a24;
  --bg-task-color: #252535;
  --primary-text-color: #f4f4f9;
  --secondary-text-color: #a0a0b0;
  --delete-color: #ff4d4d;
  --accent-color: #6366f1;
  --border-color: #2a2a3a;
}
```

The design includes:
- Smooth hover effects and transitions
- Gradient buttons with subtle shadows
- Animated task cards with slide-in effects
- Enhanced modal with backdrop blur
- Responsive column highlighting on drag

## Browser Compatibility

Works in all modern browsers that support:
- HTML5 Drag and Drop API
- localStorage
- CSS Grid and Flexbox

## License

Free to use and modify as needed.
