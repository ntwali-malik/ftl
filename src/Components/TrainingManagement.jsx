import React, { useState, useEffect } from 'react';
import TrainingService from '../services/TrainingService';
import { toast } from 'react-toastify';

const TrainingManagement = () => {
    const [schedules, setSchedules] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [schedulesData, coursesData] = await Promise.all([
                TrainingService.getAllSchedules(),
                TrainingService.getAllCourses()
            ]);
            setSchedules(schedulesData);
            setCourses(coursesData);
        } catch (error) {
            toast.error('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    const handleScheduleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const scheduleData = {
                intakeType: formData.get('intakeType'),
                startDate: formData.get('startDate'),
                duration: parseInt(formData.get('duration')),
                classSize: parseInt(formData.get('classSize')),
                fee: formData.get('fee'),
                status: formData.get('status'),
                isActive: true
            };

            // Validate required fields
            if (!scheduleData.intakeType || !scheduleData.startDate || 
                !scheduleData.duration || !scheduleData.classSize || 
                !scheduleData.status) {
                toast.error('Please fill in all required fields');
                return;
            }

            if (selectedSchedule) {
                await TrainingService.updateSchedule(selectedSchedule.id, scheduleData);
                toast.success('Schedule updated successfully');
            } else {
                await TrainingService.createSchedule(scheduleData);
                toast.success('Schedule created successfully');
            }
            fetchData();
            setSelectedSchedule(null);
            event.target.reset(); // Reset form after submission
        } catch (error) {
            toast.error('Error saving schedule: ' + error.message);
        }
    };

    const handleCourseSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.target);
            const courseData = {
                courseName: formData.get('courseName'),
                duration: formData.get('duration'),
                schedule: formData.get('schedule'),
                icon: formData.get('icon'),
                features: formData.get('features').split('\n').filter(f => f.trim())
            };

            if (selectedCourse) {
                await TrainingService.updateCourse(selectedCourse.id, courseData);
                toast.success('Course updated successfully');
            } else {
                await TrainingService.createCourse(courseData);
                toast.success('Course created successfully');
            }
            fetchData();
            setSelectedCourse(null);
        } catch (error) {
            toast.error('Error saving course');
        }
    };

    const handleDelete = async (type, id) => {
        try {
            if (type === 'schedule') {
                await TrainingService.deleteSchedule(id);
                toast.success('Schedule deleted successfully');
            } else {
                await TrainingService.deleteCourse(id);
                toast.success('Course deleted successfully');
            }
            fetchData();
        } catch (error) {
            toast.error('Error deleting item');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-fluid py-4">
            <div className="row">
                {/* Training Schedules Section */}
                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Training Schedules</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleScheduleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Intake Type *</label>
                                        <select 
                                            name="intakeType" 
                                            className="form-select"
                                            defaultValue={selectedSchedule?.intakeType || ''}
                                            required
                                        >
                                            <option value="">Select Intake Type</option>
                                            <option value="CURRENT">Current</option>
                                            <option value="NEXT">Next</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Start Date *</label>
                                        <input 
                                            type="date" 
                                            name="startDate"
                                            className="form-control"
                                            defaultValue={selectedSchedule?.startDate || ''}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Duration (weeks) *</label>
                                        <input 
                                            type="number" 
                                            name="duration"
                                            className="form-control"
                                            min="1"
                                            defaultValue={selectedSchedule?.duration || ''}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Class Size *</label>
                                        <input 
                                            type="number" 
                                            name="classSize"
                                            className="form-control"
                                            min="1"
                                            defaultValue={selectedSchedule?.classSize || ''}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Fee</label>
                                        <input 
                                            type="text" 
                                            name="fee"
                                            className="form-control"
                                            defaultValue={selectedSchedule?.fee || ''}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Status *</label>
                                        <select 
                                            name="status" 
                                            className="form-select"
                                            defaultValue={selectedSchedule?.status || ''}
                                            required
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Enrolling Now">Enrolling Now</option>
                                            <option value="Coming Soon">Coming Soon</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button type="submit" className="btn btn-primary me-2">
                                        {selectedSchedule ? 'Update' : 'Create'} Schedule
                                    </button>
                                    {selectedSchedule && (
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                setSelectedSchedule(null);
                                                event.target.reset();
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>

                            <div className="table-responsive mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Intake Type</th>
                                            <th>Start Date</th>
                                            <th>Duration</th>
                                            <th>Class Size</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schedules.map(schedule => (
                                            <tr key={schedule.id}>
                                                <td>{schedule.intakeType}</td>
                                                <td>{new Date(schedule.startDate).toLocaleDateString()}</td>
                                                <td>{schedule.duration} weeks</td>
                                                <td>{schedule.classSize}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-sm btn-primary me-2"
                                                        onClick={() => setSelectedSchedule(schedule)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete('schedule', schedule.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Short Courses Section */}
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="mb-0">Short Courses</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleCourseSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Course Name</label>
                                        <input 
                                            type="text" 
                                            name="courseName"
                                            className="form-control"
                                            defaultValue={selectedCourse?.courseName || ''}
                                        />
                                    </div>
                                    {/* Add other course form fields */}
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    {selectedCourse ? 'Update' : 'Create'} Course
                                </button>
                            </form>

                            <div className="table-responsive mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Course Name</th>
                                            <th>Duration</th>
                                            <th>Schedule</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.map(course => (
                                            <tr key={course.id}>
                                                <td>{course.courseName}</td>
                                                <td>{course.duration}</td>
                                                <td>{course.schedule}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-sm btn-primary me-2"
                                                        onClick={() => setSelectedCourse(course)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button 
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => handleDelete('course', course.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingManagement; 