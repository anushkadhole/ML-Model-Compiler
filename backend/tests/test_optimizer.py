import unittest
from app.utils.optimizer import optimize_model
from io import BytesIO

class TestOptimizer(unittest.TestCase):
    def test_optimization(self):
        dummy_file = BytesIO(b"fake model content")
        dummy_file.filename = "model.onnx"
        result = optimize_model(dummy_file, "CPU")
        self.assertEqual(result['status'], 'success')
