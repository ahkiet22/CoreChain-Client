"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";

import { getTaskList } from "@/services/task.service";
import { TTask } from "@/types/task";

interface ResTask {
  meta: {
    current: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: TTask[];
}

export default function TaskPage() {
  const [tasks, setTasks] = useState<ResTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"list" | "kanban">("list");

  const fetchTasks = async () => {
    try {
      const res = await getTaskList({
        limit: 10,
        skip: 0,
      });

      setTasks(res?.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderList = () => {
    if (!tasks) return null;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tiêu đề tác vụ</TableCell>
            <TableCell>Thời gian bắt đầu</TableCell>
            <TableCell>Ngày đến hạn</TableCell>
            <TableCell>Người tạo</TableCell>
            <TableCell>Đã tạo vào</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.result.map((task) => (
            <TableRow key={task._id}>
              <TableCell>{task.title}</TableCell>

              <TableCell>{task.startDate ? new Date(task.startDate).toLocaleDateString() : "-"}</TableCell>

              <TableCell>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}</TableCell>

              <TableCell>{typeof task.assignedTo === "object" ? task.assignedTo.email : "-"}</TableCell>

              <TableCell>{new Date(task.createdAt).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const renderKanban = () => {
    if (!tasks) return null;

    const todo = tasks.result.filter((t) => t.status === 1);
    const doing = tasks.result.filter((t) => t.status === 2);
    const done = tasks.result.filter((t) => t.status === 3);

    const Column = ({ title, data }: any) => (
      <Paper
        sx={{
          p: 2,
          width: 300,
          minHeight: 400,
          backgroundColor: "transparent"
        }}
      >
        <Typography fontWeight={600} mb={2}>
          {title}
        </Typography>

        {data.map((task: TTask) => (
          <Paper
            key={task._id}
            sx={{
              p: 1.5,
              mb: 1,
              cursor: "pointer",
            }}
          >
            <Typography fontSize={14}>{task.title}</Typography>
          </Paper>
        ))}
      </Paper>
    );

    return (
      <div className="flex items-center gap-x-2">
        <Column title="Todo" data={todo} />
        <Column title="Doing" data={doing} />
        <Column title="Done" data={done} />
      </div>
    );
  };

  return (
    <Box display="flex" height="100%">
      {/* Sidebar */}

      <Box width={260} borderRight="1px solid #eee" p={2}>
        <Typography fontWeight={600} mb={2}>
          Nhiệm vụ
        </Typography>

        <List>
          <ListItemButton selected>
            <ListItemText primary="Đã sở hữu" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Đã đăng ký" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Hoạt động" />
          </ListItemButton>
        </List>

        <Divider sx={{ my: 2 }} />

        <Typography fontSize={14} mb={1}>
          Truy cập nhanh
        </Typography>

        <List dense>
          <ListItemButton>
            <ListItemText primary="Tất cả tác vụ" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Đã tạo" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Đã chỉ định" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Đã hoàn thành" />
          </ListItemButton>
        </List>
      </Box>

      {/* Main */}

      <Box flex={1} p={3}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Đã sở hữu</Typography>

          <Button variant="contained">Nhiệm vụ mới</Button>
        </Box>

        <Tabs value={view} onChange={(_, v) => setView(v)} sx={{
          marginBottom: 2
        }}>
          <Tab value="list" label="Danh sách" />
          <Tab value="kanban" label="Kanban" />
        </Tabs>

        <div>
          {loading && <Typography>Loading...</Typography>}

          {!loading && (view === "list" ? renderList() : renderKanban())}
        </div>
      </Box>
    </Box>
  );
}
